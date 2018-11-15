using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using CleanicLaudromatAPI.Models;

namespace CleanicLaudromatAPI.Controllers
{
    public class InventoryListsController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/InventoryLists
        public IQueryable<InventoryList> GetInventoryLists()
        {
            return db.InventoryLists;
        }

        // GET: api/InventoryLists/5
        [ResponseType(typeof(InventoryList))]
        public IHttpActionResult GetInventoryList(int id)
        {
            InventoryList inventoryList = db.InventoryLists.Find(id);
            if (inventoryList == null)
            {
                return NotFound();
            }

            return Ok(inventoryList);
        }

        // PUT: api/InventoryLists/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutInventoryList(int id, InventoryList inventoryList)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != inventoryList.itemID)
            {
                return BadRequest();
            }

            db.Entry(inventoryList).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InventoryListExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/InventoryLists
        [ResponseType(typeof(InventoryList))]
        public IHttpActionResult PostInventoryList(InventoryList inventoryList)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.InventoryLists.Add(inventoryList);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (InventoryListExists(inventoryList.itemID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = inventoryList.itemID }, inventoryList);
        }

        // DELETE: api/InventoryLists/5
        [ResponseType(typeof(InventoryList))]
        public IHttpActionResult DeleteInventoryList(int id)
        {
            InventoryList inventoryList = db.InventoryLists.Find(id);
            if (inventoryList == null)
            {
                return NotFound();
            }

            db.InventoryLists.Remove(inventoryList);
            db.SaveChanges();

            return Ok(inventoryList);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool InventoryListExists(int id)
        {
            return db.InventoryLists.Count(e => e.itemID == id) > 0;
        }
    }
}