import React from 'react';

function MainPage(){
	return (
		<div>
      <script id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3.0.1/es5/tex-mml-chtml.js">
      </script>
			<h1> Ejecicios de mecánica teórica </h1>
    		<p>
    			Esta es una página web sencilla que tiene como propósito explicar 
      		algunos problemas básicos de la mecánica teórica. Estan enfocados en 
      		temas de lagrangianos y hamiltonianos. Estos temas son importantes por 
      		su utilidad en el entendimiento de la dinámica de sistemas complejos, 
      		sin la necesidad de análisis complicado por las fuerzas vectoriales. La 
      		ecuación del movimiento suele ser el enfoque principal del estudio pero 
      		también nos permiten estudiar el espacio fase. Es gracias a estos temas 
      		que se puede avanzar cada vez más en la mecánica cuántica. Estas soluciones 
      		son de análisis sencillo y conciso. Trataré de irle agregando más problemas
      		con sus respectivas soluciones a medida pasa el tiempo. 
      	</p>
        <p> <strong>El lagrangiano</strong> se define como la resta de la energía cinética menos la 
        energía potencial, \((L=T-V)\). Una vez encontrado el lagrangiano, con las ecuaciones de 
        Euler-Lagrange se pueden encontrar las ecuaciones del movimiento. Importante 
        recalcar que este método solo funciona cuando el sistema es conservativo y no hay 
        pérdidas de energía.</p> 
        <p> <strong>El hamiltoniano</strong> se define como: 
          <ul> 
            <li>\( H = \sum p \dot q - L\)</li>
          </ul>
          donde el momentum de la ecuación es el momentum generalizado definido como:
          <ul>
            <li> \( p = \) \(\partial L \over \partial \dot q\)</li>
          </ul>
          La importancia del hamiltoniano no solo radica en el estudio de la ecuación del movimiento, 
          sino que también da una mejor visión del estudio completo de la dinámica del sistema. Con el hamiltoniano
          podemos estudiar mejor el espació_fase, desde sistemas clásicos a cuánticos. Además con el hamiltoniano
          si podemos estudiar sistemas no conservativos. Por estas y muchas más razones es fundamental el estudio del
          Hamiltoniano.    

        </p>
      </div>
	);
}
export default MainPage