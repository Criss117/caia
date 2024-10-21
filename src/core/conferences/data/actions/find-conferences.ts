"use server";

import { httpClient } from "@/core/shared/lib/config/http.config";
import { CommonResponse } from "@/core/shared/models/type";
import { AxiosError } from "axios";
import { ConferencesDto } from "../dto/conference.dto";

async function findWithoutAuth() {
  try {
    const response = await httpClient.get<CommonResponse<ConferencesDto[]>>(
      "/conferences/public"
    );

    return {
      data: response.data.data,
      status: response.status,
      message: response.data.message,
      error: response.data.error,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        data: null,
        status: error.response?.status || 500,
        message: error.response?.data.message,
        error: error.response?.data.error,
      };
    }

    return {
      data: null,
      status: 500,
      message: "Error al registrar el usuario",
      error: "Error al registrar el usuario",
    };
  }
}

async function findConferencesAction(jwt: string | null) {
  if (!jwt) {
    return findWithoutAuth();
  }

  return {
    data: [] as ConferencesDto[],
    status: 500,
    message: "Error al registrar el usuario",
    error: "Error al registrar el usuario",
  };
}

export default findConferencesAction;
