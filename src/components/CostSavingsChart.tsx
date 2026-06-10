import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface CostSavingsChartProps {
  yearlySaasCost: number;
  yearlySelfHostedCost: number;
  lang: "en" | "ar";
}

export default function CostSavingsChart({
  yearlySaasCost,
  yearlySelfHostedCost,
  lang,
}: CostSavingsChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 240 });

  useEffect(() => {
    const observeTarget = wrapperRef.current;
    if (!observeTarget) return;

    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0] && entries[0].contentRect) {
        setDimensions((prev) => ({
          ...prev,
          width: entries[0].contentRect.width,
        }));
      }
    });

    resizeObserver.observe(observeTarget);
    return () => resizeObserver.unobserve(observeTarget);
  }, []);

  useEffect(() => {
    if (!chartRef.current || dimensions.width === 0) return;

    // Clear previous chart
    d3.select(chartRef.current).selectAll("*").remove();

    const data = [
      {
        year: lang === "ar" ? "السنة 1" : "Year 1",
        Saas: yearlySaasCost,
        SelfHosted: yearlySelfHostedCost,
      },
      {
        year: lang === "ar" ? "السنة 2" : "Year 2",
        Saas: yearlySaasCost * 2,
        SelfHosted: yearlySelfHostedCost * 2,
      },
      {
        year: lang === "ar" ? "السنة 3" : "Year 3",
        Saas: yearlySaasCost * 3,
        SelfHosted: yearlySelfHostedCost * 3,
      },
    ];

    const margin = { top: 30, right: 20, bottom: 30, left: 55 };
    const width = dimensions.width - margin.left - margin.right;
    const height = dimensions.height - margin.top - margin.bottom;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const subgroups = ["Saas", "SelfHosted"];
    const groups = data.map((d) => d.year);

    const x = d3.scaleBand().domain(groups).range([0, width]).padding(0.2);

    // x-axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x).tickSizeOuter(0))
      .selectAll("text")
      .style("font-size", "10px")
      .style("font-family", "sans-serif")
      .style("fill", "#94a3b8");

    svg.select(".domain").attr("stroke", "#334155");
    svg.selectAll(".tick line").attr("stroke", "#334155");

    const maxY = d3.max(data, (d) => Math.max(d.Saas, d.SelfHosted)) || 0;
    const y = d3
      .scaleLinear()
      .domain([0, maxY * 1.1]) // Add 10% headroom for labels
      .nice()
      .range([height, 0]);

    // y-axis
    svg
      .append("g")
      .call(
        d3
          .axisLeft(y)
          .ticks(5)
          .tickFormat((d) => {
            const val = Number(d);
            return val >= 1000 ? `$${(val / 1000).toFixed(1)}k` : `$${val}`;
          })
      )
      .selectAll("text")
      .style("font-size", "10px")
      .style("font-family", "sans-serif")
      .style("fill", "#94a3b8");

    svg.select(".domain").attr("stroke", "#334155");
    svg.selectAll(".tick line").attr("stroke", "#334155");

    const xSubgroup = d3
      .scaleBand()
      .domain(subgroups)
      .range([0, x.bandwidth()])
      .padding(0.05);

    const color = d3
      .scaleOrdinal()
      .domain(subgroups)
      .range(["#f87171", "#34d399"]); // Red for SaaS, Emerald for Self-hosted

    // Tooltip
    // Remove old tooltips if any
    d3.select("body").selectAll(".d3-tooltip").remove();
    const tooltip = d3
      .select("body")
      .append("div")
      .style("opacity", 0)
      .attr("class", "d3-tooltip")
      .style("position", "absolute")
      .style("z-index", "50")
      .style("background-color", "#1e293b")
      .style("color", "#f1f5f9")
      .style("padding", "8px")
      .style("border-radius", "6px")
      .style("border", "1px solid #334155")
      .style("font-size", "12px")
      .style("font-family", "sans-serif")
      .style("pointer-events", "none")
      .style("box-shadow", "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)");

    const bars = svg
      .append("g")
      .selectAll("g")
      .data(data)
      .join("g")
      .attr("transform", (d) => `translate(${x(d.year)},0)`)
      .selectAll("rect")
      .data((d) => subgroups.map((key) => ({ key, value: d[key as keyof typeof d] as number, year: d.year })))
      .join("rect")
      .attr("x", (d) => xSubgroup(d.key) || 0)
      .attr("y", height) // Start from bottom for animation
      .attr("width", xSubgroup.bandwidth())
      .attr("height", 0)
      .attr("fill", (d) => color(d.key) as string)
      .attr("rx", 3)
      .style("cursor", "pointer")
      .on("mouseover", function (event, d) {
        d3.select(this).style("opacity", 0.8).attr("fill", d.key === "Saas" ? "#ef4444" : "#10b981");
        tooltip.transition().duration(200).style("opacity", 1);
        const formatValue = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(d.value);
        tooltip
          .html(`<strong>${d.key === "Saas" ? (lang === "ar" ? "برمجيات الساس" : "SaaS Cost") : (lang === "ar" ? "الاستضافة الذاتية" : "Self-Hosted Cost")}</strong><br/>${d.year}: ${formatValue}`)
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 28}px`);
      })
      .on("mousemove", function(event) {
        tooltip
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 28}px`);
      })
      .on("mouseleave", function (event, d) {
        d3.select(this).style("opacity", 1).attr("fill", color(d.key) as string);
        tooltip.transition().duration(500).style("opacity", 0);
      });

      bars.transition()
        .duration(800)
        .delay((d, i) => i * 100)
        .attr("y", (d) => y(d.value))
        .attr("height", (d) => height - y(d.value));

    // Legend
    const legend = svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "end")
      .selectAll("g")
      .data(subgroups.slice().reverse())
      .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + (i * 20 - 20) + ")"; });

    legend.append("rect")
      .attr("x", width - 15)
      .attr("width", 15)
      .attr("height", 15)
      .attr("fill", color as any)
      .attr("rx", 3);

    legend.append("text")
      .attr("x", width - 22)
      .attr("y", 7.5)
      .attr("dy", "0.32em")
      .attr("fill", "#cbd5e1")
      .text(function(d) {
        if (lang === "ar") {
          return d === "Saas" ? "السحابة الأجنبية (SaaS)" : "الاستضافة الذاتية المودعة";
        }
        return d === "Saas" ? "SaaS Subscription" : "Self-Hosted On-Premise";
      });

    // Clean up tooltip on unmount
    return () => {
      d3.select("body").selectAll(".d3-tooltip").remove();
    };
  }, [yearlySaasCost, yearlySelfHostedCost, lang, dimensions]);

  return (
    <div className="w-full relative mt-6 border-t border-slate-800 pt-6" ref={wrapperRef}>
      <h4 className="text-xs font-bold text-slate-300 font-sans mb-4 text-center tracking-wide">
        {lang === "ar" ? "المقارنة التراكمية للتكاليف خلال 3 سنوات" : "3-Year Cumulative Cost Analysis"}
      </h4>
      <div ref={chartRef} className="w-full relative" />
    </div>
  );
}
