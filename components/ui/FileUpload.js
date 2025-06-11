"use client"
//FileUpload.js
import React from "react";
import { CldUploadButton, CldUploadWidget } from "next-cloudinary";
import { Box, FormLabel, Stack, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FiUpload } from "react-icons/fi";

export default function FileUpload({
  label,
  imageUrl,
  setImageUrl,
  height,
  note,
}) {
  return (
    <Stack spacing={1}>
      {label && <FormLabel fontWeight="bold">{label}</FormLabel>}
      {note && (
          <Text textAlign="left" fontSize="sm">
            *** {note}
          </Text>
        )}
      <CldUploadButton
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        onUpload={(result) => setImageUrl(result.info.url)}
        onError={(error) => alert("Image upload failed")}
      >
        <Stack
          bg="gray.200"
          h={height || 60}
          rounded="sm"
          justify="center"
          align="center"
          position="relative"
        >
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="property type"
              height={200}
              width={400}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          )}
          <Box
            bg="purple.500"
            p={3}
            rounded="sm"
            position="absolute"
            _hover={{ bg: "purple.700" }}
          >
            <FiUpload size={20} color="white" />
          </Box>
        </Stack>
      </CldUploadButton>
    </Stack>
  );
}
