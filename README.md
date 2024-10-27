# Probe Demo Application

This project demonstrates the use of Kubernetes **liveness** and **readiness** probes with a simple Node.js server. The application is packaged as a Docker container and deployed in a Kubernetes cluster to showcase how probes can manage the health and availability of a containerized service.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Build the Docker Image](#build-the-docker-image)
  - [Push to Docker Hub](#push-to-docker-hub)
  - [Deploy on Kubernetes](#deploy-on-kubernetes)
- [Probes Configuration](#probes-configuration)
  - [Liveness Probe](#liveness-probe)
  - [Readiness Probe](#readiness-probe)
- [Usage](#usage)
- [Cleanup](#cleanup)

## Overview

This project contains a simple Node.js application configured to start serving after a 10-second initialization delay. It uses:
- **Liveness Probe**: to ensure the application is healthy, restarting it if it becomes unresponsive.
- **Readiness Probe**: to manage traffic routing, ensuring requests are only sent to the application once it is fully ready to serve.

The probes are configured in the `k8s/deployment.yaml` file.

## Prerequisites

- Docker installed on your local machine.
- Kubernetes cluster (Minikube, kind, or any managed Kubernetes service).
- Kubectl CLI to interact with the Kubernetes cluster.
- Docker Hub account for pushing the Docker image.

## Getting Started

### Clone the Repository

```bash
git clone git@github.com:harsh7-12-99/k8sProbes.git
cd k8sProbes

