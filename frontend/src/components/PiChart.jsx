import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(chartRef.current).attr('width', width).attr('height', height);
    const pie = d3.pie().value(d => d.people);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const arcs = svg
      .selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    arcs
      .append('path')
      .attr('fill', (d, i) => color(i))
      .attr('d', arc)
      // Add mouseover event listener to show tooltip
      .on('mouseover', function (event, d) {
        const tooltip = d3.select('#tooltip');
        tooltip.transition().duration(200).style('opacity', 0.9);
        tooltip
          .html(`${d.data.city}: ${d.data.people} people`)
          .style('left', event.pageX + 'px')
          .style('top', event.pageY - 1 + 'px');
      })
      // Add mouseout event listener to hide tooltip
      .on('mouseout', function () {
        d3.select('#tooltip').transition().duration(500).style('opacity', 0);
      });

    arcs
      .append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .text(d => d.data.city);
  }, [data]);

  return (
    <div style={{ position: 'relative' }}>
      <svg ref={chartRef}></svg>
      {/* Tooltip */}
      <div id="tooltip" style={{ position: 'absolute', opacity: 0, backgroundColor: 'white', padding: '2px' }}></div>
    </div>
  );
};

export default PieChart;
