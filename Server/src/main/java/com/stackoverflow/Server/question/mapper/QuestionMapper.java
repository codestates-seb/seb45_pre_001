package com.stackoverflow.Server.question.mapper;

import com.stackoverflow.Server.question.dto.QuestionDto;
import com.stackoverflow.Server.question.entity.Question;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    Question questionPostToQuestion(QuestionDto.Post questionDto);

}
