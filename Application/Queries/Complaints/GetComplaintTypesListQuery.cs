using Application.Core;
using Domain.ClientDTOs.Complaint;
using MediatR;

namespace Application.Queries.Complaints
{
    public record GetComplaintTypesListQuery() : IRequest<Result<List<ComplaintTypeDTO>>>;
}
