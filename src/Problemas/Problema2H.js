import React from 'react';
import atwood from './Imagenes/atwood.png';


function Problem4(){
	return (
		<div>
			<script id="MathJax-script" async
          		src="https://cdn.jsdelivr.net/npm/mathjax@3.0.1/es5/tex-mml-chtml.js">
  			</script>
			<h3> Según la figura, encuentre el hamiltoniano </h3>
        	<img src={atwood} alt="Atwood"/>
        	<p> Se empieza con el lagrangiano antes encontrado. Ese lagrangiano es igual a:
        	<ul>
        		<li>\(L= \frac 1 2 (M_1 + M_2)\dot x^2+M_1gx+M_2g(l-x)\)</li>
        	</ul>
        	Ahora se obtienen las ecuaciones de los momentos generalizados. En este caso solo hay
        	un grado de libertad ya que el movimiento solo puede ser en el eje \(y\). El momento generalizado 
        	es:
        	<ul>
        		<li> \(p_y=\) \( \partial L \over \partial \dot x\) \(= (M_1 + M_2)\dot x\) </li>
        	</ul>  
        	Despejando la para \(\dot x\): 
        	<ul>
        		<li> \( \dot x =\) \( p_y \over (M_1 + M_2)\)</li>
        	</ul>  
        	El hamiltoniano está definido, en este caso como, \(H=p_y \dot x  -L\). Solo queda de sustituir las 
        	ecuaciones y simplificarlas. El hamiltoniano se deja en términos de \(p_y\) y \(x\). Entonces se tiene que:
        	<ul>
        		<li> \(H=\) \(p_y\) \( p_y \over (M_1 + M_2)\) \(-\) \(\frac 1 2 (M_1 + M_2)(\) \( p_y \over (M_1 + M_2)\) \()^2\) \(-M_1gx-M_2g(l-x)\)</li>
        	</ul>  
        	Esto se puede simplificar y el hamiltoniano queda finalmente en: 
        	<ul>
        		<li Style="border-style: groove;"> \(H=\) \(\frac 1 2 \) \((p_y)^2 \over (M_1+M_2)\) \(-M_1gx-M_2g(l-x)\)</li>
        	</ul>
        	</p>
     	</div>
	);
}
export default Problem4