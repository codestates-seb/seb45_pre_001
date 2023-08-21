package com.stackoverflow.Server.member.controller;

import com.stackoverflow.Server.dto.MultiResponseDto;
import com.stackoverflow.Server.member.dto.MemberPostDto;
import com.stackoverflow.Server.member.entity.Member;
import com.stackoverflow.Server.member.mapper.MemberMapper;
import com.stackoverflow.Server.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@Validated
@RequestMapping("/users")
@Slf4j
public class MemberController {
    private MemberMapper mapper;

    private MemberService memberService;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.mapper = mapper;
        this.memberService = memberService;
    }

    @PostMapping("/new-user")
    public ResponseEntity postMember(@RequestBody MemberPostDto memberPostDto) {

        Member member = memberService.creatMember(mapper.memberPostDtoToMember(memberPostDto));
        member.setNickname(member.getNickname());
        member.setEmail(member.getEmail());

        return new ResponseEntity(mapper.memberToMemberResponseDto(member), HttpStatus.CREATED);
    }

    @GetMapping("/{user_id}")
    public ResponseEntity getMember(@PathVariable("user_id") @Positive long userId) {
        return new ResponseEntity(mapper.memberToMemberResponseDto(memberService.findMember(userId)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMembers(@RequestParam @Positive int size,
                                     @RequestParam @Positive int page) {
        Pageable pageable = PageRequest.of(page - 1, size, Sort.by("memberId").descending());
        Page<Member> pageMembers = memberService.findMembers(pageable);
        List<Member> members = pageMembers.getContent();

        return new ResponseEntity(new MultiResponseDto(mapper.membersToMemberResponseDtos(members), pageMembers), HttpStatus.OK);
    }
}
