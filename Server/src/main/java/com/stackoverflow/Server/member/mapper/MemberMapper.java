package com.stackoverflow.Server.member.mapper;

import com.stackoverflow.Server.member.dto.MemberPostDto;
import com.stackoverflow.Server.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto memberPostDto);
}
