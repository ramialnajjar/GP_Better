using Application.Core;
using Domain.ClientDTOs.Profession;
using MediatR;

namespace Application
{
    public record InsertProfessionCommand(ProfessionDTO ProfessionDTO)
        : IRequest<Result<ProfessionDTO>>;
}
