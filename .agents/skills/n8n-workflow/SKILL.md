---
name: n8n Workflow Patterns
description: Core automation patterns and best practices for building robust n8n workflows.
---

# n8n Workflow Patterns

These guidelines define the core architectural patterns and best practices for building scalable and error-resilient n8n workflows.

## 1. The 5 Core Patterns

### Webhook Processing (Most Common)
- **Flow**: `Webhook → Validate → Transform → Respond/Notify`
- **Use Case**: Instant response to external events (lead capture, form submissions).

### HTTP API Integration
- **Flow**: `Trigger → HTTP Request → Transform → Action → Error Handler`
- **Use Case**: Connecting disparate services via REST APIs.

### Database Operations
- **Flow**: `Schedule → Query → Transform → Write → Verify`
- **Use Case**: Data synchronization, reporting, and ETL tasks.

### AI Agent Workflow
- **Flow**: `Trigger → AI Agent (Model + Tools + Memory) → Output`
- **Use Case**: Intelligent automation using LLMs and functional tools.

### Scheduled Tasks
- **Flow**: `Schedule → Fetch → Process → Deliver → Log`
- **Use Case**: Daily reports, cleanup scripts, and recurring notifications.

---

## 2. Data Flow Structures

- **Linear Flow**: Single path from trigger to end. Best for simple, deterministic tasks.
- **Branching Flow**: Uses `IF` or `Switch` nodes to handle different logic paths based on data.
- **Parallel Processing**: Splitting the flow into multiple branches and merging them later. Best for independent operations that can run simultaneously.
- **Loop Pattern**: Using `Split in Batches` to process large datasets without timing out or hitting memory limits.
- **Error Handler Pattern**: Using a dedicated "Error Trigger" to catch and log failures across the entire workflow.

---

## 3. Best Practices (✅ Do's & ❌ Don'ts)

### ✅ Do's
- **Start Simple**: Build the core logic first, then add edge case handling.
- **Error Handling**: Always include error handling for critical nodes or use global error workflows.
- **Descriptive Names**: Rename nodes to reflect their specific action (e.g., "Slack: Notify Marketing" vs. "Slack").
- **Modular Building**: Split large, complex workflows into smaller, sub-workflows using the `Execute Workflow` node.
- **Sanitize Data**: Always validate incoming webhook data before processing.

### ❌ Don'ts
- **One-Shot Building**: Don't try to build the whole thing at once. Iterate and test node-by-node.
- **Hardcode Credentials**: Always use n8n's Credential system.
- **Ignore Empty States**: Ensure the workflow doesn't break if a query returns zero results.
