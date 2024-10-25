import { Button } from "@/components/ui/button";
import { PackagePlus } from "lucide-react";

export default function Servers() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 lg:px-0">
      <div className="flex justify-between mb-4 mt-4 items-center">
        <section className="flex flex-col gap-2">
          <h2 className="mt-0 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors">
            服务器
          </h2>
          <p className="text-sm font-medium">
            你可以在这里查看和管理全部的服务器。
            <a
              href="#"
              className="font-medium text-primary underline underline-offset-4"
            >
              了解更多↗
            </a>
          </p>
        </section>
        <Button className="px-2 py-1 rounded-[8px] h-fit flex items-center gap-1">
          <PackagePlus className="size-4" />
          新增服务器
        </Button>
      </div>
      {/* <DataTableDemo /> */}
    </div>
  );
}
