

        window.onload = function () {
            window.scrollTo(0, 0);
        }

        document.addEventListener("DOMContentLoaded", function () {
            var links = document.querySelectorAll('a[href^="#productos"]');

            links.forEach(function (link) {
                link.addEventListener("click", function (event) {
                    event.preventDefault();
                    var targetId = this.getAttribute("href");
                    var targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        if (window.matchMedia('(max-width: 1024px)').matches) {
                            var offset = targetElement.offsetTop + 100;
                            window.scrollTo({
                                top: offset,
                                behavior: "smooth" // Esto activa el scroll suave
                            });
                        }
                        else{
                            var offset = targetElement.offsetTop - 60;
                            window.scrollTo({
                                top: offset,
                                behavior: "smooth" // Esto activa el scroll suave
                            });
                        }
                    }
                });
            });
        });


        document.addEventListener("DOMContentLoaded", function () {
            var links = document.querySelectorAll('a[href^="#nosotros"]');

            links.forEach(function (link) {
                link.addEventListener("click", function (event) {
                    event.preventDefault();
                    var targetId = this.getAttribute("href");
                    var targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        var offset = targetElement.offsetTop - 100; // Ajuste de 15px hacia arriba
                        window.scrollTo({
                            top: offset,
                            behavior: "smooth" // Esto activa el scroll suave
                        });
                    }
                });
            });
        });


        document.addEventListener("DOMContentLoaded", function () {
            var links = document.querySelectorAll('a[href^="#inicio"]');

            links.forEach(function (link) {
                link.addEventListener("click", function (event) {
                    event.preventDefault();
                    var targetId = this.getAttribute("href");
                    var targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        var offset = targetElement.offsetTop - 100; // Ajuste de 200px hacia arriba
                        window.scrollTo({
                            top: offset,
                            behavior: "smooth" // Esto activa el scroll suave
                        });
                    }
                });
            });
        });



        document.addEventListener("DOMContentLoaded", function () {
            var links = document.querySelectorAll('a[href^="#vender"]');

            links.forEach(function (link) {
                link.addEventListener("click", function (event) {
                    event.preventDefault();
                    var targetId = this.getAttribute("href");
                    var targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        var offset = targetElement.offsetTop - 70; // Ajuste de 200px hacia arriba
                        window.scrollTo({
                            top: offset,
                            behavior: "smooth" // Esto activa el scroll suave
                        });
                    }
                });
            });
        });


        document.addEventListener("DOMContentLoaded", function () {
            var links = document.querySelectorAll('a[href^="#ubicacion"]');

            links.forEach(function (link) {
                link.addEventListener("click", function (event) {
                    event.preventDefault();
                    var targetId = this.getAttribute("href");
                    var targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        var offset = targetElement.offsetTop - 120; // Ajuste de 200px hacia arriba
                        window.scrollTo({
                            top: offset,
                            behavior: "smooth" // Esto activa el scroll suave
                        });
                    }
                });
            });
        });
  