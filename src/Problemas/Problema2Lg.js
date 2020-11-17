import React from 'react';
import atwood from './Imagenes/atwood.png';
import atwoodRef from './Imagenes/atwoodRef.png';


function Problem2(){
	return (
		<div>
			<script id="MathJax-script" async
          		src="https://cdn.jsdelivr.net/npm/mathjax@3.0.1/es5/tex-mml-chtml.js">
  			</script>
			<h3> Encontrar el langrangiano del sistema que se muestra en la figura: </h3>
        	<img src={atwood} alt="Atwood"/>
        	<p>Antes de empezar, buscamos un buen punto de referencia. El punto de referencia 
        	que resulta ser más fácil para estudiar el sistema es el siguiente:</p>
        	<img src={atwoodRef} alt="Atwood referencia"/>
        	<p>Ahora procedemos a escribir las coordenadas del sistema. El movimiento resulta 
        	ser en el eje \(y\). Para la masa \(M_1\) la posición es \(x\) y para la masa 
        	\(M_2\) la posición es \(l-x\). Ya sabiendo las coordenadas de la posición es 
        	muy fácil encontrar la velocidad. En este caso la velocidad sería solamente \(\dot x\);
        	ya que \(l\) es una constante y su derivada con respecto al tiempo es cero. Teniendo 
        	esto calculado, procedemos a escribir la energía cinética. 
        	<ul> 
                <li>\(T=\frac 1 2 (M_1 + M_2)\dot x^2\) </li>
            </ul>  
            En el caso de la energía potencial, donde ya sabemos las coordenadas de la posición 
            con respecto al punto de referencia, es sencillamente:
            <ul> 
                <li>\(V=-M_1gx -M_2g(l-x)\) </li>.
            </ul> 
           	Ahora, recordamos que \(L=T-V\) y nos queda que el lagrangiano es finalmente igual a:
           	<ul> 
                <li Style="border-style: groove;">\(L= \frac 1 2 (M_1 + M_2)\dot x^2+M_1gx+M_2g(l-x)\) </li>.
            </ul> 

        	</p>
        </div>
	);
}
export default Problem2