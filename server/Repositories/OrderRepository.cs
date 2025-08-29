// using server.Data;
// using Dapper;
// using server.Dtos;

// namespace server.Repositories{
//     public class OrderRepository {
//         private readonly DapperContext _context;

//         public DapperContext(DapperContext context){
//             _context = context;
//         }

//         private const string InsertOrderQuery = @"INSERT INTO Orders (Items, OrderId, OrderedAt, CustomerId) VALUES (@Items, @OrderId, @OrderedAt, @CustomerId)";
//         // have to think about the items 
    
//         public async Task CreateOrder(OrderDto order){
//             var connection = await _context.CreateConnection();
//             return await connection.ExecuteAsync(InsertOrderQuery, order);
//         }

//         public async Task<OrderDto> GetOrder (string OrderId){
//             var connection = await _context.CreateConnection();
//             return await connection.QueryFirstOrDefaultAsync(SelectOrderQuery, new {OrderId = OrderId});
//         }


//     }
// }