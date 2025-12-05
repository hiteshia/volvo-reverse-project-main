import Header from "@/app/components/common/header";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="greenPattern" style={{ overflow: "hidden" }}>
      <div className="container-fluid p-0 overflow-auto">
        <div className="cstmContainerTopHeader">
          <Header />
        </div>
        <div
          className="cstmContainer"
          // style={{ overflowY: "auto", height: "calc(100vh - 80px)" }}
        >
          {children}
        </div>
      </div>
    </main>
  );
}
