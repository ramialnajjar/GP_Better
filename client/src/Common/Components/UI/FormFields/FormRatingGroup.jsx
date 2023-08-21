import React from "react";
import PropTypes from "prop-types";

// Third party
import { Controller, useFormContext } from "react-hook-form";

// Mui
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import {
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentSatisfiedAltOutlined,
  SentimentVerySatisfied,
} from "@mui/icons-material";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
  "& .MuiRating-iconFilled": {
    color: theme.palette.warning.main,
  },
  "& .MuiRating-icon": {
    marginRight: "0.5rem",
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfied color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfied color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfied color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltOutlined color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfied color="success" />,
    label: "Very Satisfied",
  },
};

const IconContainer = (props) => {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
};

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const RatingGroup = ({ name }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={3}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <StyledRating
          defaultValue={3}
          value={value ? parseFloat(value) : 3}
          onChange={onChange}
          IconContainerComponent={IconContainer}
          getLabelText={(value) => customIcons[value].label}
          highlightSelectedOnly
        />
      )}
    />
  );
};

export default RatingGroup;
