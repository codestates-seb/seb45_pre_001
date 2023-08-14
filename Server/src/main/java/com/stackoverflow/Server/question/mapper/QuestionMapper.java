package com.stackoverflow.Server.question.mapper;

import com.stackoverflow.Server.question.dto.QuestionDto;
import com.stackoverflow.Server.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    default Question questionPostToQuestion(QuestionDto.Post questionDto){
        Question question = new Question();
        question.setMember(questionDto.getMember());
        question.setTitle(questionDto.getTitle());
        question.setBody(questionDto.getBody());
        return question;
    }
    List<QuestionDto.response> questionsToQuestionResponse(List<Question> questions);

}
