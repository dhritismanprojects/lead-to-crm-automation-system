import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HubSpotClient {
  private readonly baseUrl = 'https://api.hubapi.com';

  constructor(private readonly configService: ConfigService) {}

  private getAccessToken(): string {
    const accessToken = this.configService.get<string>(
      'hubspot.accessToken',
    );

    if (!accessToken) {
      throw new Error('HubSpot access token is not configured');
    }

    return accessToken;
  }

  async getContacts(): Promise<unknown> {
    const response = await fetch(
      `${this.baseUrl}/crm/v3/objects/contacts?limit=1`,
      {
        headers: {
          Authorization: `Bearer ${this.getAccessToken()}`,
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      const body = await response.text();

      throw new Error(
        `HubSpot API request failed: ${response.status} ${body}`,
      );
    }

    return response.json();
  }

  async createContact(
    properties: Record<string, string>,
  ): Promise<unknown> {
    const response = await fetch(
      `${this.baseUrl}/crm/v3/objects/contacts`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.getAccessToken()}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          properties,
        }),
      },
    );

    if (!response.ok) {
      const body = await response.text();

      throw new Error(
        `HubSpot API request failed: ${response.status} ${body}`,
      );
    }

    return response.json();
  }

  async updateContact(
    contactId: string,
    properties: Record<string, string>,
  ): Promise<unknown> {
    const response = await fetch(
      `${this.baseUrl}/crm/v3/objects/contacts/${contactId}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${this.getAccessToken()}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          properties,
        }),
      },
    );

    if (!response.ok) {
      const body = await response.text();

      throw new Error(
        `HubSpot API request failed: ${response.status} ${body}`,
      );
    }

    return response.json();
  }
}