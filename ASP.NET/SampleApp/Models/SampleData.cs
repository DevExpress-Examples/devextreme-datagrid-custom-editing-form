using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampleApp.Models {
    static class SampleData {
        public static List<SampleOrder> Orders = new List<SampleOrder>() {
            new SampleOrder {
                OrderID = 10248,
                OrderDate = new DateTime(1996, 7, 4),
                ShipCountry = "France",
                ShipCity = "Reims",
                CustomerName = "Paul Henriot"
            },
            new SampleOrder {
                OrderID = 10249,
                OrderDate = new DateTime(1996, 7, 5),
                ShipCountry = "Germany",
                ShipCity = "Münster",
                CustomerName = "Karin Josephs"
            },
            new SampleOrder {
                OrderID = 10250,
                OrderDate = new DateTime(1996, 7, 8),
                ShipCountry = "Brazil",
                ShipCity = "Rio de Janeiro",
                CustomerName = "Mario Pontes"
            },
            new SampleOrder {
                OrderID = 10251,
                OrderDate = new DateTime(1996, 7, 8),
                ShipCountry = "France",
                ShipCity = "Lyon",
                CustomerName = "Mary Saveley"
            },
            new SampleOrder {
                OrderID = 10252,
                OrderDate = new DateTime(1996, 7, 9),
                ShipCountry = "Belgium",
                ShipCity = "Charleroi",
                CustomerName = "Pascale Cartrain"
            },
            new SampleOrder {
                OrderID = 10253,
                OrderDate = new DateTime(1996, 7, 10),
                ShipCountry = "Brazil",
                ShipCity = "Rio de Janeiro",
                CustomerName = "Mario Pontes"
            },
            new SampleOrder {
                OrderID = 10254,
                OrderDate = new DateTime(1996, 7, 11),
                ShipCountry = "Switzerland",
                ShipCity = "Bern",
                CustomerName = "Yang Wang"
            },
            new SampleOrder {
                OrderID = 10255,
                OrderDate = new DateTime(1996, 7, 12),
                ShipCountry = "Switzerland",
                ShipCity = "Genève",
                CustomerName = "Michael Holz"
            },
            new SampleOrder {
                OrderID = 10256,
                OrderDate = new DateTime(1996, 7, 15),
                ShipCountry = "Brazil",
                ShipCity = "Resende",
                CustomerName = "Paula Parente"
            },
            new SampleOrder {
                OrderID = 10257,
                OrderDate = new DateTime(1996, 7, 16),
                ShipCountry = "Venezuela",
                ShipCity = "San Cristóbal",
                CustomerName = "Carlos Hernández"
            },
            new SampleOrder {
                OrderID = 10258,
                OrderDate = new DateTime(1996, 7, 17),
                ShipCountry = "Austria",
                ShipCity = "Graz",
                CustomerName = "Roland Mendel"
            },
            new SampleOrder {
                OrderID = 10259,
                OrderDate = new DateTime(1996, 7, 18),
                ShipCountry = "Mexico",
                ShipCity = "México D.F.",
                CustomerName = "Francisco Chang"
            },
            new SampleOrder {
                OrderID = 10260,
                OrderDate = new DateTime(1996, 7, 19),
                ShipCountry = "Germany",
                ShipCity = "Köln",
                CustomerName = "Henriette Pfalzheim"
            },
            new SampleOrder {
                OrderID = 10261,
                OrderDate = new DateTime(1996, 7, 19),
                ShipCountry = "Brazil",
                ShipCity = "Rio de Janeiro",
                CustomerName = "Bernardo Batista"
            },
            new SampleOrder {
                OrderID = 10262,
                OrderDate = new DateTime(1996, 7, 22),
                ShipCountry = "USA",
                ShipCity = "Albuquerque",
                CustomerName = "Paula Wilson"
            },
            new SampleOrder {
                OrderID = 10263,
                OrderDate = new DateTime(1996, 7, 23),
                ShipCountry = "Austria",
                ShipCity = "Graz",
                CustomerName = "Roland Mendel"
            },
            new SampleOrder {
                OrderID = 10264,
                OrderDate = new DateTime(1996, 7, 24),
                ShipCountry = "Sweden",
                ShipCity = "Bräcke",
                CustomerName = "Maria Larsson"
            },
            new SampleOrder {
                OrderID = 10265,
                OrderDate = new DateTime(1996, 7, 25),
                ShipCountry = "France",
                ShipCity = "Strasbourg",
                CustomerName = "Frédérique Citeaux"
            },
            new SampleOrder {
                OrderID = 10266,
                OrderDate = new DateTime(1996, 7, 26),
                ShipCountry = "Finland",
                ShipCity = "Oulu",
                CustomerName = "Pirkko Koskitalo"
            },
            new SampleOrder {
                OrderID = 10267,
                OrderDate = new DateTime(1996, 7, 29),
                ShipCountry = "Germany",
                ShipCity = "München",
                CustomerName = "Peter Franken"
            },
            new SampleOrder {
                OrderID = 10268,
                OrderDate = new DateTime(1996, 7, 30),
                ShipCountry = "Venezuela",
                ShipCity = "Caracas",
                CustomerName = "Manuel Pereira"
            },
            new SampleOrder {
                OrderID = 10269,
                OrderDate = new DateTime(1996, 7, 31),
                ShipCountry = "USA",
                ShipCity = "Seattle",
                CustomerName = "Karl Jablonski"
            },
            new SampleOrder {
                OrderID = 10270,
                OrderDate = new DateTime(1996, 8, 1),
                ShipCountry = "Finland",
                ShipCity = "Oulu",
                CustomerName = "Pirkko Koskitalo"
            },
            new SampleOrder {
                OrderID = 10271,
                OrderDate = new DateTime(1996, 8, 1),
                ShipCountry = "USA",
                ShipCity = "Lander",
                CustomerName = "Art Braunschweiger"
            },
            new SampleOrder {
                OrderID = 10272,
                OrderDate = new DateTime(1996, 8, 2),
                ShipCountry = "USA",
                ShipCity = "Albuquerque",
                CustomerName = "Paula Wilson"
            },
            new SampleOrder {
                OrderID = 10273,
                OrderDate = new DateTime(1996, 8, 5),
                ShipCountry = "Germany",
                ShipCity = "Cunewalde",
                CustomerName = "Horst Kloss"
            },
            new SampleOrder {
                OrderID = 10274,
                OrderDate = new DateTime(1996, 8, 6),
                ShipCountry = "France",
                ShipCity = "Reims",
                CustomerName = "Paul Henriot"
            },
            new SampleOrder {
                OrderID = 10275,
                OrderDate = new DateTime(1996, 8, 7),
                ShipCountry = "Italy",
                ShipCity = "Bergamo",
                CustomerName = "Giovanni Rovelli"
            },
            new SampleOrder {
                OrderID = 10276,
                OrderDate = new DateTime(1996, 8, 8),
                ShipCountry = "Mexico",
                ShipCity = "México D.F.",
                CustomerName = "Miguel Angel Paolino"
            },
            new SampleOrder {
                OrderID = 10277,
                OrderDate = new DateTime(1996, 8, 9),
                ShipCountry = "Germany",
                ShipCity = "Leipzig",
                CustomerName = "Alexander Feuer"
            },
            new SampleOrder {
                OrderID = 10278,
                OrderDate = new DateTime(1996, 8, 12),
                ShipCountry = "Sweden",
                ShipCity = "Luleå",
                CustomerName = "Christina Berglund"
            },
            new SampleOrder {
                OrderID = 10279,
                OrderDate = new DateTime(1996, 8, 13),
                ShipCountry = "Germany",
                ShipCity = "Frankfurt a.M.",
                CustomerName = "Renate Messner"
            },
            new SampleOrder {
                OrderID = 10280,
                OrderDate = new DateTime(1996, 8, 14),
                ShipCountry = "Sweden",
                ShipCity = "Luleå",
                CustomerName = "Christina Berglund"
            },
            new SampleOrder {
                OrderID = 10281,
                OrderDate = new DateTime(1996, 8, 14),
                ShipCountry = "Spain",
                ShipCity = "Madrid",
                CustomerName = "Alejandra Camino"
            },
            new SampleOrder {
                OrderID = 10282,
                OrderDate = new DateTime(1996, 8, 15),
                ShipCountry = "Spain",
                ShipCity = "Madrid",
                CustomerName = "Alejandra Camino"
            },
            new SampleOrder {
                OrderID = 10283,
                OrderDate = new DateTime(1996, 8, 16),
                ShipCountry = "Venezuela",
                ShipCity = "Barquisimeto",
                CustomerName = "Carlos González"
            },
            new SampleOrder {
                OrderID = 10284,
                OrderDate = new DateTime(1996, 8, 19),
                ShipCountry = "Germany",
                ShipCity = "Frankfurt a.M.",
                CustomerName = "Renate Messner"
            },
            new SampleOrder {
                OrderID = 10285,
                OrderDate = new DateTime(1996, 8, 20),
                ShipCountry = "Germany",
                ShipCity = "Cunewalde",
                CustomerName = "Horst Kloss"
            },
            new SampleOrder {
                OrderID = 10286,
                OrderDate = new DateTime(1996, 8, 21),
                ShipCountry = "Germany",
                ShipCity = "Cunewalde",
                CustomerName = "Horst Kloss"
            },
            new SampleOrder {
                OrderID = 10287,
                OrderDate = new DateTime(1996, 8, 22),
                ShipCountry = "Brazil",
                ShipCity = "Rio de Janeiro",
                CustomerName = "Janete Limeira"
            },
            new SampleOrder {
                OrderID = 10288,
                OrderDate = new DateTime(1996, 8, 23),
                ShipCountry = "Italy",
                ShipCity = "Reggio Emilia",
                CustomerName = "Maurizio Moroni"
            },
            new SampleOrder {
                OrderID = 10289,
                OrderDate = new DateTime(1996, 8, 26),
                ShipCountry = "UK",
                ShipCity = "London",
                CustomerName = "Victoria Ashworth"
            },
            new SampleOrder {
                OrderID = 10290,
                OrderDate = new DateTime(1996, 8, 27),
                ShipCountry = "Brazil",
                ShipCity = "Sao Paulo",
                CustomerName = "Pedro Afonso"
            },
            new SampleOrder {
                OrderID = 10291,
                OrderDate = new DateTime(1996, 8, 27),
                ShipCountry = "Brazil",
                ShipCity = "Rio de Janeiro",
                CustomerName = "Bernardo Batista"
            },
            new SampleOrder {
                OrderID = 10292,
                OrderDate = new DateTime(1996, 8, 28),
                ShipCountry = "Brazil",
                ShipCity = "Sao Paulo",
                CustomerName = "Anabela Domingues"
            },
            new SampleOrder {
                OrderID = 10293,
                OrderDate = new DateTime(1996, 8, 29),
                ShipCountry = "Mexico",
                ShipCity = "México D.F.",
                CustomerName = "Miguel Angel Paolino"
            },
            new SampleOrder {
                OrderID = 10294,
                OrderDate = new DateTime(1996, 8, 30),
                ShipCountry = "USA",
                ShipCity = "Albuquerque",
                CustomerName = "Paula Wilson"
            },
            new SampleOrder {
                OrderID = 10295,
                OrderDate = new DateTime(1996, 9, 2),
                ShipCountry = "France",
                ShipCity = "Reims",
                CustomerName = "Paul Henriot"
            },
            new SampleOrder {
                OrderID = 10296,
                OrderDate = new DateTime(1996, 9, 3),
                ShipCountry = "Venezuela",
                ShipCity = "Barquisimeto",
                CustomerName = "Carlos González"
            },
            new SampleOrder {
                OrderID = 10297,
                OrderDate = new DateTime(1996, 9, 4),
                ShipCountry = "France",
                ShipCity = "Strasbourg",
                CustomerName = "Frédérique Citeaux"
            }
        };
    }
}
