using server.Data;
using Dapper;
using server.Dtos;

namespace server.Repositories{
    public class OrderRepository {
        private readonly DapperContext _context;

        public DapperContext(DapperContext context){
            _context = context;
        }

        //create order
        //get order
    }
}