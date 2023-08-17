package com.stackoverflow.Server.response;

import lombok.Getter;

import javax.validation.ConstraintViolation;
import java.util.List;
import java.util.Objects;

@Getter
public class ErrorResponse {
    private List<ConstraintViolationError> violationErrors;

    public ErrorResponse(List<ConstraintViolationError> violationErrors) {
        this.violationErrors = violationErrors;
    }

    @Getter
    public static class ConstraintViolationError {
        private String propertyPath;
        private Object rejectedValue;
        private String reason;


    }
}
