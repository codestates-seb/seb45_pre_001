package com.stackoverflow.Server.question.mapper;

import com.stackoverflow.Server.question.dto.QuestionDto;
import com.stackoverflow.Server.question.dto.QuestionResponseDto;
import com.stackoverflow.Server.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    default Question questionPostToQuestion(QuestionDto.Post questionDto) {
        Question question = new Question();
        question.setMember(questionDto.getMember());
        question.setTitle(questionDto.getTitle());
        question.setQuestionBody(questionDto.getQuestionBody());
        return question;
    }

    default QuestionResponseDto questionToQuestionResponse(Question question) {
        QuestionResponseDto questionResponseDto = new QuestionResponseDto();
        questionResponseDto.setMemberId(question.getMember().getMemberId());
        questionResponseDto.setNickname(question.getMember().getNickname());
        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setQuestionBody(question.getQuestionBody());
        questionResponseDto.setQuestionStatus(question.getQuestionStatus());
        questionResponseDto.setCreatedAt(question.getCreatedAt());
        return questionResponseDto;
    }

    List<QuestionResponseDto> questionsToQuestionResponse(List<Question> questions);

}
