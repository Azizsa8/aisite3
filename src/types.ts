/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum ServiceCategory {
  Interfaces = "INTERFACES",
  CRM = "CRM",
  Automation = "AUTOMATION",
  Analytics = "ANALYTICS",
  Workflows = "WORKFLOWS",
  SelfHosting = "SELF_HOSTING"
}

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  features: string[];
  benefits: string[];
  duration: string;
  iconName: string;
}

export interface UseCase {
  id: string;
  title: string;
  businessType: string;
  problem: string;
  solution: string;
  result: string;
  impactMetrics: string[];
  iconName: string;
}

export interface AuditQuestion {
  id: string;
  text: string;
  options: {
    text: string;
    score: number;
    feedback: string;
  }[];
}

export interface LeadSubmission {
  name: string;
  company: string;
  phone: string;
  email: string;
  interest: string;
  leakageScore?: number;
  message: string;
}
