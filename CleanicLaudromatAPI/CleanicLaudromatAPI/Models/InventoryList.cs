//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CleanicLaudromatAPI.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class InventoryList
    {
        public int itemID { get; set; }
        public string itemName { get; set; }
        public string category { get; set; }
        public Nullable<int> sellingPrice { get; set; }
        public Nullable<int> price { get; set; }
        public Nullable<int> profit { get; set; }
        public string sourceStore { get; set; }
        public Nullable<int> markUp { get; set; }
        public string inventoryType { get; set; }
        public string hasQty { get; set; }
        public Nullable<int> quantity { get; set; }
    }
}
