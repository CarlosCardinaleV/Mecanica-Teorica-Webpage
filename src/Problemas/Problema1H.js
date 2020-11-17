import React from 'react';
import penduloEsferico from './Imagenes/penduloEsferico.png';

function Problem3(){
	return (
		<div>
			<script id="MathJax-script" async
          		src="https://cdn.jsdelivr.net/npm/mathjax@3.0.1/es5/tex-mml-chtml.js">
  			</script>
			<h3> Encontrar el hamiltoniano del péndulo esférico. </h3>
        	<img src={penduloEsferico} alt="Péndulo Esférico"/>
        	<p>Ya tenemos la mitad del trabajo hecho si utilizamos el langrangiano antes encontrado.
        	Ese langrangiano es igual a: 
        	<ul>
        		<li>\(L=T-V=\frac 1 2 m(d \dot \theta)^2+\frac 1 2 m(d\sin(\theta)\dot \phi)^2+mgdcos(\theta)\)</li>
        	</ul>
        	El hamiltoniano se define como: \(H=p_\phi\dot \phi + p_\theta\dot \theta- L\), solo se necesita encontrar el momentum 
        	generalizado y dejar la ecuación en las variables \(p\) y \(q\). El momentum generalizado es igual a:
        	<ul>
        		<li> \(p_\phi=\) \(\partial L \over \partial \dot \phi\)\(=m(d\sin(\theta))^2\dot \phi\)</li> y
        		<li> \(p_\theta=\) \(\partial L \over \partial \dot \theta\)\(=md^2\dot \theta\).</li>
        	</ul>
        	Ahora se sustituye esto en la ecuación del hamiltoniano, despejando primero las coordenadas en término de los momentos generalizados. 
        	Esto queda de la siguiente manera:
        	<ul>
        		<li>\( \dot \phi = \) \( p_\phi \over m(d\sin(\theta))^2\)</li> y 
        		<li> \( \dot \theta = \) \( p_\theta \over md^2 \) </li>
        	</ul> 
        	Ahora se hace la sustitución en el hamiltoniano, dejando así todo en termino de \( p_\theta \), \( p_\phi \) y \( \theta \), es decir, \( H(p_\theta,p_\phi,\theta)\).
        	Se tiene entonces que:
        	<ul>
        		<li>\( H= \) \( p_\phi \) \( p_\phi \over md^2\sin(\theta)^2 \) \( + \) \( p_\theta \) \( p_\theta \over md^2\) \(-L\)</li>
        		<li> \(=\) \( p_\phi \) \( p_\phi \over md^2\sin(\theta)^2 \) \( + \) \( p_\theta \) \( p_\theta \over md^2\) \(-\) 
        		\(\frac 1 2 m(d\)\( p_\theta \over md^2\) \( )^2-\) 
        		\(\frac 1 2 m(d\sin(\theta)\) \( p_\phi \over m(d\sin(\theta))^2\) \( )^2 \) \(- mgdcos(\theta)\)</li>
        	</ul>
        	Esto se puede simplificar en: 
        	<ul>
        		<li> \(H=\) \( p_\phi \) \( p_\phi \over md^2\sin(\theta)^2 \) \( + \) \( p_\theta \) \( p_\theta \over md^2\)
        		\( -p_\phi \) \( p_\phi \over 2md^2\sin(\theta)^2 \) \( - \) \( p_\theta \) \( p_\theta \over 2md^2\) \(- mgdcos(\theta)\)</li>
        	</ul>
        	Y como se puede observar, la ecuación se puede simplificar aún más en: 
        	<ul>
        		<li Style="border-style: groove;">\(H = \) \( (p_\phi)^2 \over 2m(d\sin(\theta))^2 \) \( + \) \( (p_\theta)^2 \over 2md^2\) \(- mgdcos(\theta)\)</li>
        	</ul>
        	Así, finalmente, se obtiene el hamiltoniano del sistema simplificado. 
        	</p>
        </div>
	);
}


export default Problem3