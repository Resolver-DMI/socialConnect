using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using SocialConnect.Models;

namespace SocialConnect.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AvailableRoutesController : ApiController
    {
        private socialconnectEntities1 db = new socialconnectEntities1();

        // GET: api/AvailableRoutes
        public IQueryable<AvailableRoute> GetAvailableRoutes()
        {
            return db.AvailableRoutes;
        }

        // GET: api/AvailableRoutes/5
        [ResponseType(typeof(AvailableRoute))]
        public IHttpActionResult GetAvailableRoute(int id)
        {
            AvailableRoute availableRoute = db.AvailableRoutes.Find(id);
            if (availableRoute == null)
            {
                return NotFound();
            }

            return Ok(availableRoute);
        }

        // PUT: api/AvailableRoutes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAvailableRoute(int id, AvailableRoute availableRoute)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != availableRoute.ID)
            {
                return BadRequest();
            }

            db.Entry(availableRoute).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AvailableRouteExists(id))
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

        // POST: api/AvailableRoutes
        [ResponseType(typeof(AvailableRoute))]
        public IHttpActionResult PostAvailableRoute(AvailableRoute availableRoute)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AvailableRoutes.Add(availableRoute);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = availableRoute.ID }, availableRoute);
        }

        // DELETE: api/AvailableRoutes/5
        [ResponseType(typeof(AvailableRoute))]
        public IHttpActionResult DeleteAvailableRoute(int id)
        {
            AvailableRoute availableRoute = db.AvailableRoutes.Find(id);
            if (availableRoute == null)
            {
                return NotFound();
            }

            db.AvailableRoutes.Remove(availableRoute);
            db.SaveChanges();

            return Ok(availableRoute);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AvailableRouteExists(int id)
        {
            return db.AvailableRoutes.Count(e => e.ID == id) > 0;
        }
    }
}