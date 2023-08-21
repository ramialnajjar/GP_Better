using Application.Core;
using Domain.ClientDTOs.Complaint;
using MediatR;

namespace Application
{
    public record InsertComplaintCommand(InsertComplaintDTO ComplaintDTO)
        : IRequest<Result<InsertComplaintDTO>>;
}
