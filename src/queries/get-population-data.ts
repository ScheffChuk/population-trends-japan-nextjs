"use server";

import { PopulationCompositionPerYearResponse } from "@/types";

export const getPopulationData = async (
  prefCode: number,
): Promise<PopulationCompositionPerYearResponse> => {
  try {
    const response = await fetch(
      process.env.API_URL_ENDPOINT +
        `/api/v1/population/composition/perYear?prefCode=${prefCode}`,
      {
        headers: {
          "X-API-KEY": process.env.X_API_KEY!,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Network response was not ok" + response.status);
    }
    return await response.json();
  } catch (error) {
    console.error("Error in getPopulationData:", error);
    throw error;
  }
};
