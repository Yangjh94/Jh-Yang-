
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { Streamdown } from "streamdown";
import { FileText, Download, ChevronRight, File, Presentation, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function KnowledgeBase() {
  // 默认选中第一个分类的第一个项目
  const defaultItem = config.knowledgeBase.tree[0]?.items[0];
  const [activeItem, setActiveItem] = useState(defaultItem);
  const [mdContent, setMdContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!activeItem) return;

    if (activeItem.type === "markdown") {
      setIsLoading(true);
      fetch(activeItem.path)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to load document");
          return res.text();
        })
        .then((text) => {
          setMdContent(text);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setMdContent("# 错误\n无法加载文档，请检查文件路径配置。");
          setIsLoading(false);
        });
    }
  }, [activeItem]);

  const SidebarContent = () => (
    <div className="py-4">
      <h2 className="px-4 text-lg font-bold mb-4 flex items-center gap-2">
        <FileText className="h-5 w-5 text-primary" />
        目录导航
      </h2>
      <div className="space-y-6">
        {config.knowledgeBase.tree.map((category, idx) => (
          <div key={idx} className="px-2">
            <h3 className="px-2 text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
              {category.category}
            </h3>
            <div className="space-y-1">
              {category.items.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveItem(item)}
                  className={cn(
                    "w-full flex items-center gap-2 px-2 py-2 text-sm font-medium rounded-sm transition-colors text-left",
                    activeItem === item
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-foreground"
                  )}
                >
                  {item.type === "markdown" ? (
                    <FileText className="h-4 w-4 shrink-0" />
                  ) : (
                    <File className="h-4 w-4 shrink-0" />
                  )}
                  <span className="truncate">{item.title}</span>
                  {activeItem === item && <ChevronRight className="h-4 w-4 ml-auto" />}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-64 border-r border-border bg-secondary/10 shrink-0">
          <ScrollArea className="h-[calc(100vh-4rem)]">
            <SidebarContent />
          </ScrollArea>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Mobile Header */}
          <div className="md:hidden border-b p-4 flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <SidebarContent />
              </SheetContent>
            </Sheet>
            <span className="font-bold truncate">{activeItem?.title}</span>
          </div>

          <ScrollArea className="flex-1 h-[calc(100vh-4rem)]">
            <div className="container max-w-4xl mx-auto p-6 md:p-12">
              {activeItem?.type === "markdown" ? (
                isLoading ? (
                  <div className="flex items-center justify-center h-40 text-muted-foreground">
                    加载中...
                  </div>
                ) : (
                  <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-bold prose-h1:text-3xl prose-a:text-primary hover:prose-a:underline">
                    <Streamdown>{mdContent}</Streamdown>
                  </div>
                )
              ) : (
                <div className="flex flex-col items-center justify-center h-[50vh] border-2 border-dashed border-border rounded-lg bg-secondary/5 p-8 text-center">
                  <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    {activeItem?.title.includes("PPT") ? (
                      <Presentation className="h-10 w-10 text-primary" />
                    ) : (
                      <Download className="h-10 w-10 text-primary" />
                    )}
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{activeItem?.title}</h2>
                  <p className="text-muted-foreground mb-8 max-w-md">
                    该文件无法直接预览。您可以点击下方按钮下载到本地查看。
                  </p>
                  <a href={activeItem?.path} download>
                    <Button size="lg" className="gap-2">
                      <Download className="h-4 w-4" /> 下载文件
                    </Button>
                  </a>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
    </Layout>
  );
}
