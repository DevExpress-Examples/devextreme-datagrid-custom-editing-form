using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;
using System;

namespace ASP_NET_Core.Models {
    public class Employee
    {
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "ID")]
        public int ID { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "FirstName")]
        [Required(ErrorMessage = "First Name is required.")]
        public string FirstName { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "LastName")]
        [Required(ErrorMessage = "Last Name is required.")]
        public string LastName { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "Prefix")]
        public string Prefix { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "Position")]
        public string Position { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "BirthDate")]
        [Required(ErrorMessage = "Birth Date is required.")]
        public DateTime? BirthDate { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "HireDate")]
        public DateTime? HireDate { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "Notes")]
        public string Notes { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "Address")]
        public string Address { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "Phone")]
        [Required(ErrorMessage = "Phone Number is required.")]
        public string Phone { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "Email")]
        [EmailAddress(ErrorMessage = "Email is incorrect.")]
        public string Email { get; set; }
    }
}
