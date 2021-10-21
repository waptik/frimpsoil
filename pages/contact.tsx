import { AltBody } from "@/components/Body";
import EmptySpace from "@/components/EmptySpace";
import Page from "@/components/Page";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";

interface InputFieldI {
  errors: {
    [x: string]: any;
  };
  name: string;
  type?: string;
  label: string;
  placeholder?: string;
  required?: Record<string, any>;
}

const ContactPage = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  function InputField({
    errors,
    name,
    type = "text",
    placeholder,
    label,
    required,
  }: InputFieldI) {
    return (
      <FormControl
        isRequired={Boolean(required?.required)}
        isInvalid={errors[name]}
        mb={6}
      >
        <FormLabel htmlFor={name}>{label}</FormLabel>
        {type === "textarea" ? (
          <Textarea
            id={name}
            placeholder={placeholder}
            {...register(name, required)}
          />
        ) : (
          <Input
            type={type}
            h="3.25rem"
            id={name}
            placeholder={placeholder}
            {...register(name, required)}
          />
        )}
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
    );
  }

  function onSubmit(values: any) {
    setIsSubmitting(true);
    console.log(values);
    setTimeout(() => {
      toast({
        title: "Message sent",
        status: "success",
        description: "Your message has been sent",
      });
      setIsSubmitting(false);
      reset();
    }, 5000);
  }

  const inputs = [
    {
      name: "name",
      label: "Full name",
      placeholder: "John Doe",
      required: { required: "Your full name cannot be empty" },
    },
    {
      name: "email",
      label: "Email address",
      placeholder: "joe@mail.etc",
      required: { required: "Your email address cannot be empty" },
      type: "email",
    },
    {
      name: "number",
      label: "Phone number",

      placeholder: "0201234567",
      required: { required: "Your phone number cannot be empty" },
    },
    {
      name: "company",
      label: "Your company",
      placeholder: "Twitter, Inc",
    },
    {
      name: "message",
      label: "Your message",
      placeholder: "Call me back",
      type: "textarea",
      required: {
        required: "Your message cannot be empty",
        minLength: { value: 4, message: "Minimum length should be 4" },
      },
    },
  ];

  return (
    <Page title="Get in touch with Us">
      <AltBody title="Contact Us">
        <Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} columnGap={4}>
            <Box as="form" onSubmit={handleSubmit(onSubmit)}>
              <Flex
                direction="column"
                flex="1"
                justify="center"
                align="center"
                zIndex={1}
              >
                <Box>
                  <EmptySpace />
                  <Box mx="-15px">
                    <Box
                      id="contnr"
                      minH="px"
                      pos="relative"
                      px="15px"
                      w="full"
                      float={{ md: "left" }}
                    >
                      <Box px="15px" w="full">
                        <Box id="wrapper">
                          <Heading
                            size="md"
                            as="h3"
                            color="red.500"
                            textAlign="center"
                          >
                            Talk to Us
                          </Heading>
                          <Box h={5}>
                            <Box as="span" />
                          </Box>
                        </Box>
                      </Box>
                      <EmptySpace />
                      <Box px="15px" w="full">
                        <Box id="wrapper">
                          <Text size="md" color="gray.800" textAlign="center">
                            You have questions and we have answers. Contact us
                            today, we’re here to help.
                          </Text>
                          <Box h={5}>
                            <Box as="span" />
                          </Box>
                        </Box>
                      </Box>
                      <EmptySpace />
                      {inputs.map((input, i) => (
                        <InputField key={i} {...input} errors={errors} />
                      ))}

                      <Box textAlign="center">
                        <Button
                          mt={4}
                          colorScheme="red"
                          isLoading={isSubmitting}
                          type="submit"
                        >
                          Submit
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box bg="gray.900"></Box>
          </SimpleGrid>
        </Box>
      </AltBody>
    </Page>
  );
};

export default ContactPage;
