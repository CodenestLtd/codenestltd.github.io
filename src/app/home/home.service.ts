import { Injectable } from '@angular/core';
import {
  Authentication,
  Challenge,
  IdentityTypeName,
  TermsAndConditions,
  IdentityType
} from '../shared/models/onboarding';
import { OnboardingService } from '../shared/api/onboarding.service';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  authentication: Authentication;
  companyName: string;
  challenge: Challenge;
  termsAndConditions: TermsAndConditions;
  selectedIdentityType: IdentityType;

  constructor(private onboardingService: OnboardingService) {}

  public async loadChallenge(tokenId: string) {
    this.authentication = await this.onboardingService.login(tokenId);
    this.challenge = await this.onboardingService.getChallenge(
      this.authentication.challengeId
    );

    this.termsAndConditions = await this.onboardingService.getTermsAndConditions(
      this.authentication.companyId
    );

    // TODO: Replace with real call when backend call exist
    this.companyName = 'Hitachi';
  }

  public getTermsAndConditions(): TermsAndConditions {
    return this.termsAndConditions;
  }

  public setSelectedIdentityType(identityType: IdentityType) {
    this.selectedIdentityType = identityType;
  }

  public async acceptTermsAndConditions(termsAndConditionsId: string) {
    await this.onboardingService.postTermsAndConditions(
      termsAndConditionsId,
      this.authentication.challengeId
    );
  }

  public async sendOtpSms() {
    await this.onboardingService.sendSmsOtp(this.authentication.challengeId);
  }

  public async validateOtp(otp: string) {
    await this.onboardingService.validateOtp(
      this.authentication.challengeId,
      otp
    );
  }

  public async uploadDocument(base64EncodedDocument: string) {
    return this.fulfilchallenge(
      base64EncodedDocument,
      this.selectedIdentityType.name
    );
  }

  public async uploadSelfie(base64EncodedSelfie: string) {
    return this.fulfilchallenge(base64EncodedSelfie, IdentityTypeName.SELFIE);
  }

  public getCompleteMessage() {
    // TODO: Get message from backend
    return 'Thank you for completing your application with Hitachi Capital.';
  }

  private async fulfilchallenge(
    base64EncodedDocument: string,
    identityTypeName: IdentityTypeName
  ) {
    try {
      return await this.onboardingService.fulfillChallenge(
        this.challenge.challengeId,
        base64EncodedDocument,
        identityTypeName
      );
    } catch (err) {
      // TODO decide error handling of upload
      console.error(err);
    }
  }

  public getChallenge(): Challenge {
    return this.challenge;
  }

  public getCompanyName(): string {
    return this.companyName;
  }
}
