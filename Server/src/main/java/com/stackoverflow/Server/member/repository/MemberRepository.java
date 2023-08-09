package com.stackoverflow.Server.member.repository;

import com.stackoverflow.Server.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
