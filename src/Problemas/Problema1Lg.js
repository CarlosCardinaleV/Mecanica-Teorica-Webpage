import React from 'react';
import penduloEsferico from './Imagenes/penduloEsferico.png';

function Problem1(){
	return (
		<div>
            <script id="MathJax-script" async
                src="https://cdn.jsdelivr.net/npm/mathjax@3.0.1/es5/tex-mml-chtml.js">
            </script>
			<h3>Encontrar el lagrangiano de un péndulo esférico</h3>
    		<p>Para resolver el problema del péndulo esféricos primero
    		buscamos el punto de referencia adecuado. Queremos que sea en 
    		un lugar no inercial y que simplifique el procedimiento para encontrar
    		la respuesta. El mejor punto de referencia en este sistema sería el
    		origen, es decir, el punto del pivote. Sería el punto que se 
    		muestra en la siguiente imagen:
            </p>
    		<img src={penduloEsferico} alt="Péndulo Esférico"/>
            <p>Teniendo claro el punto de referencia procedemos a describir la
    		posición de la masa del péndulo usando coordenadas esféricas.
    		
            <ul> 
                <li>Para la coordenada \(x\) tenemos: </li>
                \(x=d\sin(\theta)\cos(\phi)\)
                <li>Para la coordenada \(y\) tenemos: </li>
                \(y=d\sin(\theta)\sin(\phi)\)
                <li>Para la coordenada \(z\) tenemos: </li> 
                \(z=-d\cos(\theta)\)
            </ul>
            
            Procedemos a sacarle las derivadas con respecto al tiempo a cada una de las ecuaciones
            anteriores. La primera derivada con respecto al tiempo, de las coordenadas, 
            es la velocidad:

            <ul> 
                <li>Para la coordenada \(x\) tenemos: </li>
                \(\dot x=d\cos(\theta)\cos(\phi)\dot \theta - d\sin(\theta)\sin(\phi)\dot \phi\)
                <li>Para la coordenada \(y\) tenemos: </li>
                \(\dot y=d\cos(\theta)\sin(\phi)\dot \theta + d\sin(\theta)\cos(\phi)\dot \phi\)
                <li>Para la coordenada \(z\) tenemos: </li> 
                \(\dot z=d\sin(\theta) \dot \theta\)
            </ul>
            El lagrangiano está definido como \(L = T-V\), donde \(T\) es la energía cinética
            y la \(V\) es la energía potencial. Para este sistema la energía cinética es: 
            \(T=\frac 1 2 m (\dot x^2 + \dot y^2 + \dot z^2)\); y para la energía potencial 
            se tiene: \(V=-mgd \cos(\theta )\). Entonces el lagrangiano es igual a: 
            <ul>
                <li>\(L=T-V=\frac 1 2 m (\dot x^2 + \dot y^2 + \dot z^2)+mgd \cos(\theta )\).</li>
            </ul>
            Haciendo la sustitución con las coordenadas esféricas de velocidad, el lagrangiano queda 
            entonces como:
            <ul>
                <li Style="border-style: groove;" >\(L=T-V=\frac 1 2 m(d \dot \theta)^2+\frac 1 2 m(d\sin(\theta)\dot \phi)^2+mgdcos(\theta)\).</li>
            </ul>     
            </p>
        
        </div>
	);
}
export default Problem1