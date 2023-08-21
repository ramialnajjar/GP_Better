using Application.Core;
using Domain.ClientDTOs.Department;
using MediatR;

namespace Application
{
    public record InsertDepartmentCommand(DepartmentDTO DepartmentDTO)
        : IRequest<Result<DepartmentDTO>>;
}
