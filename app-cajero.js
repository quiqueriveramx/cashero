
        const urlParams = new URLSearchParams(window.location.search);
        const usuario = urlParams.get('usuario');
        let saldoDemo = parseFloat(urlParams.get('saldo'));

        if (usuario !== null && !isNaN(saldoDemo)) {
            const infoUsuario = document.getElementById("infoUsuario");
            infoUsuario.textContent = `Bienvenido, ${usuario}!`;
            mostrarSaldo(saldoDemo);
        }

        let saldo = isNaN(saldoDemo) ? 0 : saldoDemo;

        function mostrarInput(mensaje) {
            const inputMensajeElement = document.getElementById("inputMensaje");
            const inputContainer = document.getElementById("inputContainerOperacion");

            inputMensajeElement.textContent = mensaje;
            inputContainer.style.display = "flex";
        }

        function actualizarURL() {
            const newParams = new URLSearchParams();
            newParams.set('usuario', usuario);
            newParams.set('saldo', saldo);
            const newURL = `${window.location.pathname}?${newParams.toString()}`;
            window.history.replaceState({}, '', newURL);
        }

        function realizarOperacion() {
            const operacion = document.getElementById("inputMensaje").textContent;

            switch (operacion) {
                case 'Depósito':
                    const montoDeposito = parseFloat(document.getElementById("monto").value);
                    if (!isNaN(montoDeposito) && montoDeposito > 0) {
                        saldo += montoDeposito;
                        mostrarMensaje(`Has depositado $${montoDeposito}. Tu saldo actual es: $${saldo.toFixed(2)}.`);
                        actualizarURL();
                    } else {
                        mostrarMensaje("Por favor, ingrese un monto válido.");
                    }
                    break;

                case 'Retiro':
                    const montoRetiro = parseFloat(document.getElementById("monto").value);
                    if (!isNaN(montoRetiro) && montoRetiro > 0) {
                        if (montoRetiro <= saldo) {
                            saldo -= montoRetiro;
                            mostrarMensaje(`Has retirado $${montoRetiro}. Tu saldo actual es: $${saldo.toFixed(2)}.`);
                            actualizarURL();
                        } else {
                            mostrarMensaje("Saldo insuficiente para esta operación.");
                        }
                    } else {
                        mostrarMensaje("Por favor, ingrese un monto válido.");
                    }
                    break;

                default:
                    mostrarMensaje(""); // No mostrar mensaje por defecto
                    break;
            }

            // Permitir realizar más operaciones después de esta
            document.getElementById("monto").value = "";
            operacionRealizada = false;
        }

        function mostrarSaldo(saldo) {
            const saldoActualizado = document.getElementById("saldoActualizado");
            saldoActualizado.textContent = `Tu saldo actual es: $${saldo.toFixed(2)}`;
            document.querySelector(".saldo-container").style.display = "block";
        }

        function mostrarMensaje(texto) {
            const mensajeOperacion = document.getElementById("mensajeOperacion");
            mensajeOperacion.textContent = texto;
            document.querySelector(".mensaje-container").style.display = "block";
        }

        function ocultarMensaje() {
            const mensajeOperacion = document.getElementById("mensajeOperacion");
            mensajeOperacion.textContent = "";
            document.querySelector(".mensaje-container").style.display = "none";
        }

        function consultarSaldo() {
            mostrarSaldo(saldo);
        }

        function exit() {
            alert("Gracias por usar el simulador de cajero automático. Hasta luego.");
            window.location.href = "./login.html";
        }