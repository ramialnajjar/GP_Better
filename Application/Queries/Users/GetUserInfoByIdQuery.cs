﻿using Application.Core;
using Domain.ClientDTOs.User;
using Domain.DataModels.User;
using MediatR;

namespace Application.Queries.Users
{
    public record GetUserInfoByIdQuery(int id) : IRequest<Result<DetailedUserDTO>>;
}
