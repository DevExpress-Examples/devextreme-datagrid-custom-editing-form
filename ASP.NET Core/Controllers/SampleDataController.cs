using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Xml.Linq;
using ASP.NET_Core.Models;
using ASP_NET_Core.Models;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ASP_NET_Core.Extensions;

namespace ASP_NET_Core.Controllers {

    [Route("api/[controller]")]
    public class SampleDataController : Controller {

        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(EmployeeStore.Employees, loadOptions);
        }
        [HttpPost]
        public IActionResult Add(string values) {
            var newEmployee = new Employee();
            JsonConvert.PopulateObject(values, newEmployee);

            if (!TryValidateModel(newEmployee))
                return BadRequest(ModelState.GetFullErrorMessage());

            EmployeeStore.Employees.Add(newEmployee);

            return Ok();
        }

        [HttpPut]
        public IActionResult Update(int key, string values) {
            var employee = EmployeeStore.Employees.First(a => a.ID == key);
            JsonConvert.PopulateObject(values, employee);

            if (!TryValidateModel(employee))
                return BadRequest(ModelState.GetFullErrorMessage());

            return Ok();
        }

        [HttpDelete]
        public void Delete(int key) {
            var employee = EmployeeStore.Employees.First(a => a.ID == key);
            EmployeeStore.Employees.Remove(employee);
        }
    }
}