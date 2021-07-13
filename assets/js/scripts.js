$(document).ready(function () { // Inicio de jquerry boostrap

    // Funciones
   function crearFicha(registrosArray, priUltima, tabla) {

        let textoTabla = "";
        let ultimo = registrosArray.length - 1;
        let textoPrimero = `Primera atención: ${registrosArray[0].paciente} - ${registrosArray[0].prevision} | Última atención: ${registrosArray[ultimo].paciente} - ${registrosArray[ultimo].prevision}.`

        priUltima.innerHTML = textoPrimero;
        console.log(`: Primera atención: ${registrosArray[0].paciente} -  ${registrosArray[0].prevision} | Última atención: ${registrosArray[ultimo].paciente} - ${registrosArray[ultimo].prevision}.`)

        for (let values of registrosArray) {
            textoTabla += `
               <tr>
                <td>${values.hora}</td>
                <td>${values.especialista}</td>
                <td>${values.paciente}</td>
                <td>${values.rut}</td>
                <td>${values.prevision}</td>
              </tr>
            `;
        }
        console.log(textoTabla);
        let tablaLista = crearTable(textoTabla);
        console.log(tablaLista);
        tabla.innerHTML = tablaLista;
    }

    function crearTable(contenido) {
        let estruContenido = `
            <table class="table table-dark table-striped table-bordered">
            <thead class="thead-dark">
            <tr>
            <th>Hora</th>
            <th>Especialista</th>
            <th>Paciente</th>
            <th>Rut</th>
            <th>Prevision</th>
            </tr>
            </thead>
            ${contenido}
            </table>
        `;
        return estruContenido;

    }

    // Main

    // Declaracion Variables
    const radiologia = [
        {
            hora: "11:00",
            especialista: "IGNACIO SCHULZ",
            paciente: "FRANCISCA ROJAS",
            rut: "9878782-1",
            prevision: "FONASA"
        },

        {
            hora: "11:30",
            especialista: "FEDERICO SUBERCASEAUX",
            paciente: "PAMELA ESTRADA",
            rut: "15345241-3",
            prevision: "ISAPRE"
        },

        {
            hora: "15:00",
            especialista: "FERNANDO WURTHZ",
            paciente: "ARMANDO LUNA",
            rut: "16445345-9",
            prevision: "ISAPRE"
        },

        {
            hora: "15:30",
            especialista: "ANA MARIA GODOY",
            paciente: "MANUEL GODOY",
            rut: "17666419-0",
            prevision: "FONASA"
        },

        {
            hora: "16:00",
            especialista: "PATRICIA SUAZO",
            paciente: "RAMON ULLOA",
            rut: "14989389-K",
            prevision: "FONASA"
        }
    ]

    const traumatologia = [
        {
            hora: "8:00",
            especialista: "MARIA PAZ ALTUZARRA",
            paciente: "PAULA SANCHEZ",
            rut: "15554774-5",
            prevision: "FONASA"
        },

        {
            hora: "10:00",
            especialista: "RAUL ARAYA",
            paciente: "ANGÉLICA NAVAS",
            rut: "15444147-9",
            prevision: "ISAPRE"
        },

        {
            hora: "10:30",
            especialista: "MARIA ARRIAGADA",
            paciente: "ANA KLAPP",
            rut: "17879423-9",
            prevision: "ISAPRE"
        },

        {
            hora: "11:00",
            especialista: "ALEJANDRO BADILLA",
            paciente: "FELIPE MARDONES",
            rut: "1547423-6",
            prevision: "ISAPRE"
        },


        {
            hora: "11:30",
            especialista: "CECILIA BUDNIK",
            paciente: "DIEGO MARRE",
            rut: "16554741-K",
            prevision: "FONASA"
        },

        {
            hora: "12:00",
            especialista: "ARTURO CAVAGNARO",
            paciente: "CECILIA MENDEZ",
            rut: "9747535-8",
            prevision: "ISAPRE"
        },

        {
            hora: "12:30",
            especialista: "ANDRES KANACRI",
            paciente: "MARCIAL SUAZO",
            rut: "11254785-5",
            prevision: "ISAPRE"
        }
    ]

    const dental = [
        {
            hora: "8:30",
            especialista: "ANDREA ZUÑIGA",
            paciente: "MARCELA RETAMAL",
            rut: "11123425-6",
            prevision: "ISAPRE"
        },

        {
            hora: "11:00",
            especialista: "MARIA PIA ZAÑARTU",
            paciente: "ANGEL MUÑOZ",
            rut: "9878789-2",
            prevision: "ISAPRE"
        },

        {
            hora: "11:30",
            especialista: "SCARLETT WITTING",
            paciente: "MARIO KAST",
            rut: "7998789-5",
            prevision: "FONASA"
        },

        {
            hora: "13:00",
            especialista: "FRANCISCO VON TEUBER",
            paciente: "KARIN FERNANDEZ",
            rut: "18887662-K",
            prevision: "FONASA"
        },


        {
            hora: "13:30",
            especialista: "EDUARDO VIÑUELA",
            paciente: "HUGO SANCHEZ",
            rut: "17665461-4",
            prevision: "FONASA"
        },

        {
            hora: "14:00",
            especialista: "RAQUEL VILLASECA",
            paciente: "ANA SEPULVEDA",
            rut: "14441281-0",
            prevision: "ISAPRE"
        }

    ]

    // Traumatologia
    let primerTraumatologia = document.getElementById("priultiTrauma");
    let tablaTraumatologia = document.getElementById("tablaTrauma");

    // Radiologia
    let primerRadio = document.getElementById("priultiRadio");
    let tablaRadiologi = document.getElementById("tablaRadio");

    // Dental
    let primerDenta = document.getElementById("priultiDental");
    let tablaDenta = document.getElementById("tablaDental");


    // Body
    crearFicha(traumatologia, primerTraumatologia, tablaTraumatologia);
    crearFicha(radiologia, primerRadio, tablaRadiologi);
    crearFicha(dental, primerDenta, tablaDenta);


})