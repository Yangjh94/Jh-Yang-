
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Delete, History } from "lucide-react";
import calcBg from "@/assets/calc-bg.jpeg";
import { config } from "@/config";

export default function CalculatorApp() {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  
  // Directly use Guest/Public since login is removed
  const username = "访客"; 

  const handlePress = (val: string) => {
    if (val === "C") {
      setDisplay("0");
      setExpression("");
    } else if (val === "AC") {
      setDisplay("0");
      setExpression("");
      setHistory([]);
    } else if (val === "=") {
      try {
        // Note: In a real production app, use a safe math parser instead of eval
        // eslint-disable-next-line no-eval
        const result = eval(expression + display).toString();
        const calculation = `${expression}${display} = ${result}`;
        setHistory([calculation, ...history]);
        setDisplay(result);
        setExpression("");
      } catch (error) {
        setDisplay("Error");
        setExpression("");
      }
    } else if (["+", "-", "*", "/"].includes(val)) {
      setExpression(display + " " + val + " ");
      setDisplay("0");
    } else {
      setDisplay(display === "0" ? val : display + val);
    }
  };

  const buttons = [
    { label: "AC", class: "bg-red-500 text-white hover:bg-red-600" },
    { label: "C", class: "bg-gray-200 text-black hover:bg-gray-300" },
    { label: "/", class: "bg-primary text-white hover:bg-primary/90" },
    { label: "*", class: "bg-primary text-white hover:bg-primary/90" },
    { label: "7", class: "bg-white hover:bg-gray-50" },
    { label: "8", class: "bg-white hover:bg-gray-50" },
    { label: "9", class: "bg-white hover:bg-gray-50" },
    { label: "-", class: "bg-primary text-white hover:bg-primary/90" },
    { label: "4", class: "bg-white hover:bg-gray-50" },
    { label: "5", class: "bg-white hover:bg-gray-50" },
    { label: "6", class: "bg-white hover:bg-gray-50" },
    { label: "+", class: "bg-primary text-white hover:bg-primary/90" },
    { label: "1", class: "bg-white hover:bg-gray-50" },
    { label: "2", class: "bg-white hover:bg-gray-50" },
    { label: "3", class: "bg-white hover:bg-gray-50" },
    { label: "=", class: "row-span-2 bg-black text-white hover:bg-gray-800" },
    { label: "0", class: "col-span-2 bg-white hover:bg-gray-50" },
    { label: ".", class: "bg-white hover:bg-gray-50" },
  ];

  return (
    <Layout>
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src={calcBg} alt="Grid Background" className="w-full h-full object-cover opacity-20" />
        </div>

        <div className="relative z-10 w-full max-w-5xl flex gap-8 items-start">
          {/* Main Calculator */}
          <div className="flex-1 flex justify-center">
            <Card className="w-full max-w-sm border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] rounded-none bg-gray-100 p-6">
              <div className="flex justify-between items-center mb-6 border-b-2 border-black/10 pb-4">
                 <div className="font-mono text-sm">{config.calculator.userLabel}: {username}</div>
                 {/* Logout button removed as login is gone */}
              </div>

              {/* Display */}
              <div className="bg-[#9EA792] border-4 border-black/20 inset-shadow-sm p-4 mb-6 font-mono text-right rounded-sm shadow-inner h-24 flex flex-col justify-end">
                 <div className="text-gray-600 text-sm h-6">{expression}</div>
                 <div className="text-4xl font-bold tracking-widest truncate">{display}</div>
              </div>

              {/* Keypad */}
              <div className="grid grid-cols-4 gap-3">
                {buttons.map((btn, i) => (
                  <button
                    key={i}
                    onClick={() => handlePress(btn.label)}
                    className={`
                      ${btn.class} 
                      ${btn.label === '=' ? 'h-full' : 'h-16'}
                      text-xl font-bold rounded-sm border-b-4 border-r-2 border-black/20 active:border-0 active:translate-y-[4px] transition-all shadow-sm flex items-center justify-center
                    `}
                    style={{ gridRow: btn.label === '=' ? 'span 2' : 'auto', gridColumn: btn.label === '0' ? 'span 2' : 'auto' }}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </Card>
          </div>

          {/* History Sidebar (Desktop) */}
          <div className="hidden lg:block w-80">
            <Card className="rounded-none border-2 border-black h-[600px] flex flex-col bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
              <div className="p-4 border-b-2 border-black bg-black text-white flex justify-between items-center">
                <h3 className="font-bold flex items-center"><History className="mr-2 w-4 h-4"/> {config.calculator.history}</h3>
                <Button variant="ghost" size="icon" onClick={() => setHistory([])} className="text-white hover:bg-white/20 h-8 w-8">
                  <Delete className="w-4 h-4" />
                </Button>
              </div>
              <ScrollArea className="flex-1 p-4">
                {history.length === 0 ? (
                  <div className="text-center text-gray-400 mt-10 text-sm italic">{config.calculator.noHistory}</div>
                ) : (
                  <div className="space-y-3">
                    {history.map((item, idx) => (
                      <div key={idx} className="p-3 bg-gray-50 border border-gray-200 text-right font-mono text-sm hover:bg-primary/5 transition-colors">
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
