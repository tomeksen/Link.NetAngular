using NetProjectAngular.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace NetProjectAngular.Controllers
{
    [EnableCors("http://localhost:4200", "*","*")]
    public class EntriesController : ApiController
    {
        public IHttpActionResult GetEntries()
        {
            try
            {
                using (var context = new AppDbContext())
                {
                    var entries = context.entries.ToList();
                    return Ok(entries);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
