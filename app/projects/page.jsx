import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Mis proyectos - Cami Stefano',
  description: 'Proyectos de Cami Stefano',
};

export default function Projects() {
  return (
    <section>
      <div>
        <h1>Mis proyectos</h1>
        <ul>
          <li>
            <Link href="/projects/results-summary-component">Results summary Component</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
