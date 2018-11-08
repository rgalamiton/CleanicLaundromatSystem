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
    public class Self_serviceController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Self_service
        public IQueryable<Self_service> GetSelf_service()
        {
            return db.Self_service;
        }

        // GET: api/Self_service/5
        [ResponseType(typeof(Self_service))]
        public IHttpActionResult GetSelf_service(int id)
        {
            Self_service self_service = db.Self_service.Find(id);
            if (self_service == null)
            {
                return NotFound();
            }

            return Ok(self_service);
        }

        // PUT: api/Self_service/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSelf_service(int id, Self_service self_service)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != self_service.transID)
            {
                return BadRequest();
            }

            db.Entry(self_service).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Self_serviceExists(id))
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

        // POST: api/Self_service
        [ResponseType(typeof(Self_service))]
        public IHttpActionResult PostSelf_service(Self_service self_service)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Self_service.Add(self_service);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = self_service.transID }, self_service);
        }

        // DELETE: api/Self_service/5
        [ResponseType(typeof(Self_service))]
        public IHttpActionResult DeleteSelf_service(int id)
        {
            Self_service self_service = db.Self_service.Find(id);
            if (self_service == null)
            {
                return NotFound();
            }

            db.Self_service.Remove(self_service);
            db.SaveChanges();

            return Ok(self_service);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Self_serviceExists(int id)
        {
            return db.Self_service.Count(e => e.transID == id) > 0;
        }
    }
}