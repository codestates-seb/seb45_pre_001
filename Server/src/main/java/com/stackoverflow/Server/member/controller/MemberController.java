package com.stackoverflow.Server.member.controller;

import com.stackoverflow.Server.member.dto.MemberPostDto;
import com.stackoverflow.Server.member.entity.Member;
import com.stackoverflow.Server.member.mapper.MemberMapper;
import com.stackoverflow.Server.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

        return new ResponseEntity(member, HttpStatus.CREATED);
    }
}
