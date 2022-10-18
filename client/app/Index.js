var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade'),
]

var tbody = document.querySelector('table tbody');

document.querySelector('.form') .addEventListener('submit', function(event) {

    var tr = documen.createElement('tr');

    campos.forEach(function (campo) {
        var td = document.createElement('td');
        td.textContent = campo.value
        td.appendChild(td);
    })

    var tdVolume = documen.createElement('td');
    tdVolume = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

})
