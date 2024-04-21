function convertir(){
    var valor = parseFloat(document.getElementById('valor').value);
    var unidad_origen = document.getElementById('unidad_origen').value;
    var unidad_destino = document.getElementById('unidad_destino').value;
    var resultado;
if (unidad_origen === unidad_destino) {
    resultado = valor;
} else if (unidad_origen === 'segundos') {
    if (unidad_destino === 'minutos') {
        resultado = valor / 60;
    } else if (unidad_destino === 'horas') {
        resultado = valor / 3600;
    } else if (unidad_destino === 'dias') {
        resultado = valor / 86400;
    }
} else if (unidad_origen === 'minutos') {
    if (unidad_destino === 'segundos') {
        resultado = valor * 60;
    } else if (unidad_destino === 'horas') {
        resultado = valor / 60;
    } else if (unidad_destino === 'dias') {
        resultado = valor / 1440;
    }
} else if (unidad_origen === 'horas')  {
    if (unidad_destino === 'segundos'){
        resultado = valor * 3600;
    } else if (unidad_destino === 'minutos') {
        resultado = valor * 60;
    } else if (unidad_destino === 'dias') {
        resultado = valor / 24;
    }
} else if (unidad_origen === 'dias') {
    if (unidad_destino === 'segundos') {
        resultado = valor * 86400;
    } else if (unidad_destino === 'minutos') {
        resultado = valor * 1440;
    } else if (unidad_destino === 'horas') {
        resultado = valor * 24;

    }
    
}
document.getElementById('resultado').innerText = valor + "" + unidad_origen + " son equivalentes a " + resultado.toFixed(2) + "" + unidad_destino + ".";    
}