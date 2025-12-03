import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export const dynamic = "force-dynamic";

// Fetch auth token from Sankalptaru API
async function fetchAuthToken(): Promise<string | null> {
  try {
    const response = await axios.post(
      "https://app.sankalptaru.org/oauth/token",
      {
        grant_type: "client_credentials",
        client_id: "11",
        client_secret: "51Ew49U6FnqGdRbkHxyDYSOQkbtHwUYwVkW0GtyE",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response && response.data && response.data.access_token) {
      return response.data.access_token;
    }
    return null;
  } catch (error) {
    console.error("Error fetching auth token:", error);
    return null;
  }
}

// POST handler for tree assignment
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, count } = body;

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    // Fetch a fresh auth token
    const token = await fetchAuthToken();
    if (!token) {
      return NextResponse.json(
        { error: "Failed to fetch auth token" },
        { status: 500 }
      );
    }

    // Assign trees
    const response = await axios.post(
      "https://app.sankalptaru.org/api/v1/business-card/VolvoCarsIndia/assign-tree",
      {
        name: name,
        count: count,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (
      response &&
      response.data &&
      Array.isArray(response.data) &&
      response.data.length > 0
    ) {
      return NextResponse.json({
        success: true,
        vforestUrl: response.data[0]["vforest-url"] || null,
      });
    }

    return NextResponse.json(
      { error: "Failed to assign trees" },
      { status: 500 }
    );
  } catch (error: any) {
    console.error("Error assigning trees:", error);
    return NextResponse.json(
      { error: error.message || "An error occurred while assigning trees" },
      { status: 500 }
    );
  }
}
