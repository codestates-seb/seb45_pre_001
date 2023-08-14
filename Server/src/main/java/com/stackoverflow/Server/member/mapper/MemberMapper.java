package com.stackoverflow.Server.member.mapper;

import com.stackoverflow.Server.member.dto.MemberPostDto;
import com.stackoverflow.Server.member.dto.MemberResponseDto;
import com.stackoverflow.Server.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto memberPostDto);
    MemberResponseDto memberToMemberResponseDto(Member member);
    List<MemberResponseDto> membersToMemberResponseDtos(List<Member> members);
}
