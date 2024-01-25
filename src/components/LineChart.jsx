import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Limpiar el contenedor SVG antes de renderizar
    d3.select(svgRef.current).selectAll('*').remove();

    // Configurar dimensiones y márgenes del gráfico
    const width = 400;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 20, left: 40 };

    // Calcular dimensiones internas del gráfico
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Crear escalas para los ejes
    const xScale = d3.scaleLinear()
      .domain([d3.min(data, d => d.x), d3.max(data, d => d.x)])
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([d3.min(data, d => d.y), d3.max(data, d => d.y)])
      .range([innerHeight, 0]);

    // Crear la línea
    const line = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y));

    // Crear contenedor SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Dibujar la línea
    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'blue') // Puedes cambiar el color de la línea aquí
      .attr('stroke-width', 2)
      .attr('d', line);

    // Crear ejes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    // Añadir ejes al gráfico
    svg.append('g')
      .attr('transform', `translate(0, ${innerHeight})`)
      .call(xAxis);

    svg.append('g')
      .call(yAxis);
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default LineChart;
